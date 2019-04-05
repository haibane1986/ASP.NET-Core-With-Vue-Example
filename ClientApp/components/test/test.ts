import { Component, Vue, Watch } from 'vue-property-decorator';
import VueRouter from "vue-router";

Component.registerHooks([
    'beforeRouteEnter'
])

@Component({
    components: {
        MyButton: require('../common/MyButton.vue.html'),
        ResetButton: require('../common/ResetButton.vue.html')
    }
})
export default class TestComponent extends Vue {
    private count: number = 0;
    public greetText: string = "Hello";

    public get isRegulars(): boolean {
        return this.count >= 5;
    }

    @Watch('count')
    public countChanged() {
        if (this.count === 5) {
            alert("this.count === 5");
        }
    }
    
    public onMyButtonClicked(count: number){
        this.count = count;
        this.greetText = "onMyButtonClicked";
    }

    beforeRouteEnter(to: VueRouter, from: VueRouter, next: any) {
        next();
        console.log("beforeRouteEnter");
        // next(component => {
        //     component.data = data;
        //     console.log(data);
        // })
    }
}