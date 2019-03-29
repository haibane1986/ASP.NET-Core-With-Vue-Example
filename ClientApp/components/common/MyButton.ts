import Vue from 'vue'
import {Component, Prop, Emit} from "vue-property-decorator";

@Component
export default class MyButtonComponent extends Vue{
    @Prop()
    public greet?: string;

    @Emit('clicked')
    private onClick() {
        alert(this.greet);
    }
}