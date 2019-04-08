import Vue from 'vue'
import {Component, Prop, Emit} from "vue-property-decorator";
import { MdButton } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdButton)

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