import {Component, Emit, Prop, Vue} from "vue-property-decorator"

@Component
export default class ResetButton extends Vue {
    @Prop({required: true})
    public initialValue!: string

    @Prop()
    public value!: string;

    public created() {
        //this.initialValue = this.value;
        console.log("created");
    }

    @Emit()
    public input(value: string) {
    }

    public onClick() {
        this.input(this.initialValue);
    }
}