import { useSnackbar } from "notistack";
import { positionConfig } from "./constant.js";

const useCustomSnackbar = (props) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const { position } = props;

  const showSnackbar = (message, options = {}) => {
    enqueueSnackbar(message, {
      autoHideDuration: 3000,
      anchorOrigin: {
        ...positionConfig[position],
      },
      ...options,
    });
  };

  return {
    showSnackbar,
    closeSnackbar,
  };
};

export default useCustomSnackbar;
