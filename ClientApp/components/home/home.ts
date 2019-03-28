import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {
        MyButton: require('../common/MyButton.vue.html')
    }
})
export default class HomeComponent extends Vue {}