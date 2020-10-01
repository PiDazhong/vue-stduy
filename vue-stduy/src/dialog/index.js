import progressBar from "./ProgressBar";
import Tooltip from "./Tooltip";

const dialog = {
  install: function (Vue) {
    Vue.component('ProgressBar', progressBar)
    Vue.component('Tooltip', Tooltip)
  }
}

export default dialog
