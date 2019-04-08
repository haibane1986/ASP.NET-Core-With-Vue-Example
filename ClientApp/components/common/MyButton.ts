import Vue from 'vue'
import {Component, Prop, Emit} from "vue-property-decorator";
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

@Component
export default class MyButtonComponent extends Vue {
    private count: number = 0;

    @Prop()
    public greet?: string;

    @Emit()
    public clicked(count: number) {

    }

    public onClick() {
        alert(this.greet);
        this.count++;
        this.clicked(this.count);
    }
}