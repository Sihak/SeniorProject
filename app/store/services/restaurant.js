import { restaurantDB } from "./base";

export function insertRestaurant(restaurant){
    return(
        restaurantDB().add(restaurant).then(ref => {
            restaurantDB().doc(ref.id).update({
                id:ref.id
            })
        })
    )
}