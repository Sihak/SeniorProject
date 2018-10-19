import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MapView from 'react-native-maps';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MainCarousel from '../screen/map/carousel'
import { DIMENSION, APPEARANCES, COLORS } from '../module';
import SliderCarousel from '../screen/map/carousel/components/sliderCarousel';
import { observer, inject } from 'mobx-react';



@inject('restaurant')
@observer

// const ENTRIES2 = [
// 	{
// 		title: 'Favourites landscapes 1',
// 		latitude: 12.546932,
// 		longitude: 104.920049,
// 	},
// 	{
// 		title: 'Favourites landscapes 1',
// 		latitude: 13.546932,
// 		longitude: 104.920049,
// 	},
// 	{
// 		title: 'Favourites landscapes 1',
// 		latitude: 14.546932,
// 		longitude: 104.920049,
// 	},
// 	{
// 		title: 'Favourites landscapes 1',
// 		latitude: 14.546932,
// 		longitude: 104.920049,
// 	},
// ]

class MapComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			region: {
				latitude: 11.546932,
				longitude: 104.920049,
				latitudeDelta: 1.01,
				longitudeDelta: 1.01,
			},
			data: this.props.restaurant.stores,
			detail: null,
			open: false,
			longitude: 104.920049,
			latitude: 11.546932,
			nav : this.props,
			navigation : this.props
		};
	}
	componentDidMount() {
		this.props.restaurant.getRestaurant()
	}
	// componentWillMount = () => {
	// 	this.getCurrentLocation();
	// }
	// getCurrentLocation = () =>
	// 	navigator.geolocation.getCurrentPosition(
	// 		(position) => {
	// 			let currentUserPosition = position.coords;
	// 			console.log("currentUserPosition", currentUserPosition)
	// 			this.setState({
	// 				longitude: currentUserPosition.longitude,
	// 				latitude: currentUserPosition.latitude
	// 			})
	// 		},
	// 		(error) => {
	// 			console.log(error);
	// 		},
	// 		{
	// 			enableHighAccuracy: false,
	// 			timeout: 20000,
	// 			maximumAge: 0,
	// 			distanceFilter: 10
	// 		}
	// 	);
	changeRegion() {
		this.setState({ region: this.getRegion(), open: true, detail: 'hello' })
	}
	onClickMap(item) {
		this.setState({ region: { ...this.state.region, latitude: item.latitude - 0.3, longitude: item.longitude } })
	}
	onChangeCarousel(latitude, longitude) {
		this.setState({
			latitude, longitude, region: {
				latitude: latitude - .25,
				longitude: longitude,
				latitudeDelta: 1.01,
				longitudeDelta: 1.01,
			}
		})
	}

	render() {
		console.log("this.props11111", this.props.navigation)
		const { loading } = this.props.restaurant.stores;
		const  {navigation}  = this.state.nav;
		return (
			<View style={styles.container}>
				{loading ?
					<Loading />
					: <View></View>

				}
				<MapView
					// provider={"google"}
					showsUserLocation={true}
					style={styles.map}
					loadingEnabled={true}
					pitchEnabled={true}
					zoomEnabled={true}
					showerUserLocation={true}
					showsCompass={true}
					showsScale={true}
					showsIndoors={true}
					showerUserLocation
					showsIndoorLevelPicker={true}
					region={this.state.region}
				>
					{
						this.state.data.map((item, index) => {
							return (
								<MapView.Marker
									key={index}
									imageStyle={{ width: 1, height: 1 }}
									coordinate={{
										longitude: this.state.longitude,
										latitude: this.state.latitude,
									}}
									image={this.props.image}
									onPress={() => this.changeRegion}
								/>
							)
						})
					}

				</MapView>
				{
					this.props.listRestaurant ?
						<View style={{ bottom: 90, position: 'absolute' }}>
							{
								this.props.restaurant.stores.length > 0 ?
									<SliderCarousel
										navigation={this.props.navigation}
										// navigation={() => this.props.navigation.navigate('ViewDetail', {
										// backgroundColor: COLORS.LIGHT_BLUE,
									  	// })}
										onChange={this.onChangeCarousel.bind(this)}
										data={this.props.restaurant.stores} />
									: null
							}
						</View>
						: 
						<View></View>
				}

			</View>
		);
	}
}

// define your styles
const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		height: DIMENSION(195),
		width: DIMENSION(100),
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
	list: {
		paddingVertical: 5,
		bottom: DIMENSION(30),
		position: 'absolute'
	},
	scrollableMenu: {
		marginTop: 10,
	},
	card: {
		marginVertical: 5,
		width: DIMENSION(60),
		height: DIMENSION(50),
		borderRadius: 12,
		overflow: 'hidden',
		marginHorizontal: 10,
		backgroundColor: '#fff',
	},
	cover: {
		width: '100%',
		height: '100%'
	},
	coverContainer: {
		width: '100%',
		height: '60%',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 15,
		paddingHorizontal: 10,
	},

	details: {
		padding: 6.5
	},

	description: {
		marginTop: 5,
		color: COLORS.TEXT_BLACK,
		fontSize: 12,
		fontWeight: '600'
	},

	icon: {
		color: COLORS.TEXT_BLACK,
	},

	contactText: {
		color: COLORS.TEXT_BLACK,
		marginLeft: 5,
	},

	contact: {
		marginTop: 2.5,
		flexDirection: 'row',
		alignItems: 'center',
	},

	companyName: {
		fontSize: 18,
		fontWeight: '900',
		color: COLORS.TEXT_BLACK
	},

	seeAll: {
		fontSize: 16,
		fontWeight: 'bold',
		color: COLORS.POSITIVE_COLOR
	},
	scrollableMenuName: {
		fontSize: 23,
		fontWeight: 'bold',
		color: COLORS.TEXT_BLACK
	},
	// CartCarousel
	list: {
        paddingVertical: 5,
    },
    scrollableMenu: {
        marginTop: 10,
    },
    card: {
        marginVertical: 5,
        width: DIMENSION(70),
        height: DIMENSION(70),
        borderRadius: 12,
        overflow: 'hidden',
        marginHorizontal: 10,
        backgroundColor: '#fff',
    },
    cover: {
        width: '100%',
        height: '100%'
    },
    coverContainer: {
        width: '100%',
        height: '60%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 10,
    },

    details: {
        padding: 6.5
    },

    description: {
        marginTop: 5,
        color: COLORS.TEXT_BLACK,
        fontSize: 12,
        fontWeight: '600'
    },

    icon: {
        color: COLORS.TEXT_BLACK,
    },

    contactText: {
        color: COLORS.TEXT_BLACK,
        marginLeft: 5,
    },

    contact: {
        marginTop: 2.5,
        flexDirection: 'row',
        alignItems: 'center',
    },

    companyName: {
        fontSize: 18,
        fontWeight: '900',
        color: COLORS.TEXT_BLACK
    },

    seeAll: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.POSITIVE_COLOR
    },
    scrollableMenuName: {
        fontSize: 23,
        fontWeight: 'bold',
        color: COLORS.TEXT_BLACK
    }
});

//make this component available to the app
export default MapComponent;