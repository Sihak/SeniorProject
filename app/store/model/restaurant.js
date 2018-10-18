import { observable, action } from 'mobx';
import { insertRestaurant } from '../services/restaurant';
import { restaurantDB } from '../services/base';
import { getImageUrl, pushToArray } from '../../utilities';
// import moment from ''
export default class Restaurant  {

    constructor(){
        this.getDrinks();
        this.getFoods();
        this.getStreetFoods();
    }

    @observable stores = [];
    @observable loading = false;
    @observable drinks = [];
    @observable foods = [];
    @observable streetFoods = [];
    @action addRestaurant(businessName,location,type,logo,cover,description,mapLocation,contact){
        const restaurant = {
            dateCreated : new Date(),
            businessName: businessName,
            contact : contact,
            location    : location,
            type        : type,
            logoUrl     : logo,
            coverUrl    : cover,

            mapLocation : mapLocation,
            description : description,
            termAndCondition : true,
        }
        this.loading = true;
        insertRestaurant(restaurant).then(() => {
            this.loading = false;
        });
    }

    @action getDrinks(){
        this.loading = true;
        restaurantDB()
        .where('type','==','drinks')
        .onSnapshot(stores => {
            this.drinks = pushToArray(stores);
            this.loading = false;
        })
    }

    @action getFoods(){
        this.loading = true;
        restaurantDB()
        .where('type','==','foods')
        .onSnapshot(stores => {
            this.foods = pushToArray(stores);
            this.loading = false;
        })
    }

    @action getStreetFoods(){
        this.loading = true;
        restaurantDB()
        .where('type','==','streetFoods')
        .onSnapshot(stores => {
            this.streetFoods = pushToArray(stores);
            this.loading = false;
        })
    }

    @action getRestaurant(type){
        console.log('TYPE',type)
        if(type){
            this.loading = true;
            restaurantDB()
            .where('type','==',type)
            .onSnapshot(stores => {
                this.stores = pushToArray(stores);
                this.loading = false;
            })
        }else {
            this.loading = true;
            restaurantDB()
            .onSnapshot(stores => {
                this.stores = pushToArray(stores);
                this.loading = false;
            })
        };
       
    };
}