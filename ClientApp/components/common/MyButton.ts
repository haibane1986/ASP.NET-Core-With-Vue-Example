import {Component, Vue, Prop} from "vue-property-decorator";

@Component
export default class MyButtonComponent extends Vue{
    @Prop()
    public greet?: string;

    public onClick(){
        alert(this.greet);
        this.greet = "こんにちは"
    }
}