import { observable, action } from 'mobx';
import { insertRestaurant } from '../services/restaurant';
import { getImageUrl } from '../../utilities';
export default class Restaurant  {
    @observable loading = false;
    @action addRestaurant(businessName,location,type,logo,cover,description,mapLocation){
        console.log('LOGO',logo)
        console.log('COVER',cover)

        const restaurant = {
            businessName: businessName,
            location    : location,
            type        : type,
            logoUrl     : getImageUrl(logo.uri,businessName,'logo'),
            coverUrl    : getImageUrl(cover.uri,businessName,'cover'),
            mapLocation : mapLocation,
            description : description,
            termAndCondition : true,
        }
        console.log('RESTAURANT',restaurant)
        this.loading = true;
        // insertRestaurant(restaurant).then(() => {
        //     this.loading = false;
        //     console.log('Added data Successfully')
        // });
    }
}