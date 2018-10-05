import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MapView from 'react-native-maps';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { DIMENSION, APPEARANCES, COLORS } from '../module';

const ENTRIES2 = [
	{
		title: 'Favourites landscapes 1',
		latitude: 12.546932,
		longitude: 104.920049,
	},
	{
		title: 'Favourites landscapes 1',
		latitude: 13.546932,
		longitude: 104.920049,
	},
	{
		title: 'Favourites landscapes 1',
		latitude: 14.546932,
		longitude: 104.920049,
	},
	{
		title: 'Favourites landscapes 1',
		latitude: 14.546932,
		longitude: 104.920049,
	},
]

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
			data: ENTRIES2,
			detail: null,
			open: false,
			// rigi
		};
	}
	componentWillMount = () => {
		this.getCurrentLocation();
	}
	getCurrentLocation = () =>
		navigator.geolocation.getCurrentPosition(
			(position) => {
				let currentUserPosition = position.coords;
				console.log("Hello", currentUserPosition)
				this.setState({
					longitude: currentUserPosition.longitude,
					latitude: currentUserPosition.latitude
				})
			},
			(error) => {
				console.log(error);
			},
			{
				enableHighAccuracy: false,
				timeout: 20000,
				maximumAge: 0,
				distanceFilter: 10
			}
		);
	changeRegion() {
		this.setState({ region: this.getRegion(), open: true, detail: 'hello' })
	}
	onClickMap(item) {
		console.log('data:', item)
		this.setState({ region: { ...this.state.region, latitude: item.latitude, longitude: item.longitude } })
	}
	render() {
		const { region } = this.props;
		console.log(region);

		return (
			<View style={styles.container}>
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
									imageStyle={{ width: 1, height: 1 }}
									coordinate={{
										latitude: item.latitude,
										longitude: item.longitude,
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
						<FlatList
							showsHorizontalScrollIndicator={false}
							data={ENTRIES2}
							keyExtractor={(index) => index.toString()}
							horizontal={true}
							style={[styles.list, APPEARANCES.SHADOW]}
							renderItem={({ item }) => {
								return (
									<TouchableOpacity
										onPress={() => this.onClickMap(item)}
										style={[styles.card, APPEARANCES.SHADOW]}>

										<View style={styles.coverContainer}>
											<Image
												style={styles.cover} source={require('../asset/images/coverSample.jpg')} />
										</View>
										<View style={styles.details}>
											<Text style={styles.companyName}>Koi The</Text>
											<Text style={styles.description}>
												{item.title}
											</Text>
											<View style={styles.contact}>
												<MaterialIcons style={styles.icon} name={'place'} />
												<Text style={styles.contactText}>
													Street 360, #44E0
                                    </Text>
											</View>
											<View style={styles.contact}>
												<MaterialIcons style={styles.icon} name={'call'} />
												<Text style={styles.contactText}>
													(+855) 69 959 168
                                    </Text>
											</View>
										</View>
									</TouchableOpacity>
								)
							}}
						/> : <View></View>
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
		height: DIMENSION(60),
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