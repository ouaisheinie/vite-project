import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import TodoDeleteButton from "./components/common/TodoDeleteButton.vue";

const app = createApp(App);
app.config.errorHandler = (err) => {
	/* 处理错误 */
	console.log(err);
};
app.component("TodoDeleteButton", TodoDeleteButton);

app.mount("#app");
