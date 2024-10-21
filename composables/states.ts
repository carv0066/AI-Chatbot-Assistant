import { type IMessage } from "~/Interfaces/IMessage";

export const useIsChatting = () => useState("isChatting", () => false);
export const useMessages = () => useState<IMessage[]>("messages", () => []);