import {AppDispatch, RootState} from "../store/store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

//typed hooks
export const useAppDispatch = () => useDispatch <AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;

