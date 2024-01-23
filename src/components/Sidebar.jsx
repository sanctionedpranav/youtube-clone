import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const selectedCategory = "Coding";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories?.map((category) => {
        return (
          <button
            key={category?.name}
            onClick={() => {
              setSelectedCategory(category?.name);
            }}
            className="category-btn"
            style={{
              backgroundColor: category?.name === selectedCategory && "#FC1503",
              color: "#fff",
            }}
          >
            <span
              style={{
                color: category?.name === selectedCategory ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {category?.icon}
            </span>
            <span
              style={{
                opacity: category?.name === selectedCategory ? "1" : "0.8",
              }}
            >
              {category?.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
