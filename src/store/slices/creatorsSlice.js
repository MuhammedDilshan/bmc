import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  creators: [],
  isLoading: false,
  error: null,
  maleCount: 0,
  femaleCount: 0,
  avtiveMales: 0,
  activeFemales: 0,
  showEditModal: false,
  currentCreator: {},
  isEdit: false,
};

export const fetchCreators = createAsyncThunk(
  "creator/fetchCreators",
  async (params, { rejectWithValue }) => {
    try {
      const response = await fetch(params);
      if (!response.ok) {
        throw new Error("Failed to fetch creators");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const loadMoreCreators = createAsyncThunk(
  "creator/loadMoreCreators",
  async (params, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${params?.api}?page=${params?.page}&per_page=${params?.per_page}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch creators");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addCreators = createAsyncThunk(
  "creator/addCreators",
  async (params, { rejectWithValue }) => {
    try {
      const response = await fetch(params?.api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${params?.token}`,
        },
        body: JSON.stringify({
          ...params?.values,
          page: params?.page,
          per_page: params?.per_page,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch creators");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteCreators = createAsyncThunk(
  "creator/deleteCreators",
  async (params, { rejectWithValue }) => {
    try {
      const response = await fetch(`${params?.api}/${params?.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${params?.token}`,
        },
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Creator not found");
        }
        if (response.status === 401) {
          throw new Error("Unauthorized request");
        }
        throw new Error("Failed to delete creator");
      }

      return response.status;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const creatorSlice = createSlice({
  name: "creator",
  initialState,
  reducers: {
    handleModal: (state, action) => {
      state.showEditModal = !state.showEditModal;
    },
    saveCurrentData: (state, action) => {
      state.currentCreator = action.payload;
    },
    editMode: (state, action) => {
      state.isEdit = action.payload;
    },
    updateConfig: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCreators.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCreators.fulfilled, (state, action) => {
        state.isLoading = false;
        state.creators = action.payload;
        state.maleCount = state.creators?.filter(
          (creator) => creator?.gender === "male"
        )?.length;
        state.femaleCount = state.creators?.filter(
          (creator) => creator?.gender === "female"
        )?.length;

        state.avtiveMales = state.creators?.filter(
          (creator) =>
            creator?.status === "active" && creator?.gender === "male"
        )?.length;
        state.activeFemales = state.creators?.filter(
          (creator) =>
            creator?.status === "active" && creator?.gender === "female"
        )?.length;
      })
      .addCase(fetchCreators.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //   delete_creator
      .addCase(deleteCreators.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCreators.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteCreators.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //   load_more
      .addCase(loadMoreCreators.pending, (state) => {
        state.isPaginationLoading = true;
        state.error = null;
      })
      .addCase(loadMoreCreators.fulfilled, (state, action) => {
        state.isPaginationLoading = false;
        state.creators = [...state.creators, ...action.payload];

        state.maleCount = state.creators?.filter(
          (creator) => creator?.gender === "male"
        )?.length;
        state.femaleCount = state.creators?.filter(
          (creator) => creator?.gender === "female"
        )?.length;
        state.avtiveMales = state.creators?.filter(
          (creator) =>
            creator?.status === "active" && creator?.gender === "male"
        )?.length;
        state.activeFemales = state.creators?.filter(
          (creator) =>
            creator?.status === "active" && creator?.gender === "female"
        )?.length;
      })
      .addCase(loadMoreCreators.rejected, (state, action) => {
        state.isPaginationLoading = false;
        state.error = action.payload;
      })

      //   add_user
      .addCase(addCreators.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addCreators.fulfilled, (state, action) => {
        state.status = "sucess";
        state.creators = [action.payload, ...state.creators];
        state.error = action.payload;
        state.maleCount = state.creators?.filter(
          (creator) => creator?.gender === "male"
        )?.length;
        state.femaleCount = state.creators?.filter(
          (creator) => creator?.gender === "female"
        )?.length;
        state.avtiveMales = state.creators?.filter(
          (creator) =>
            creator?.status === "active" && creator?.gender === "male"
        )?.length;
        state.activeFemales = state.creators?.filter(
          (creator) =>
            creator?.status === "active" && creator?.gender === "female"
        )?.length;
      })
      .addCase(addCreators.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { handleModal, saveCurrentData, editMode } = creatorSlice.actions;
export default creatorSlice.reducer;
