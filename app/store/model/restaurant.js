import { observable, action } from 'mobx';
import { insertRestaurant } from '../services/restaurant';
import { restaurantDB } from '../services/base';
import { getImageUrl, pushToArray } from '../../utilities';
// import moment from ''
export default class Restaurant  {
    @observable stores = [];
    @observable loading = false;
    @action addRestaurant(businessName,location,type,logo,cover,description,mapLocation){
        const restaurant = {
            dateCreated : new Date(),
            businessName: businessName,
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

    @action getRestaurant(type){
        if(type){
            this.loading = true;
            restaurantDB()
            .where('type','===',type)
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