import Vue from 'vue'
import {Component, Prop, Emit} from "vue-property-decorator";

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