import React, { Component } from "react";
import {
	Text,
	View,
	Dimensions,
	TouchableWithoutFeedback,
	Linking,
	TouchableOpacity,
	Image
} from "react-native";
import isIphoneX from '../../../../module/platform';
import { translate } from "react-i18next";
import Carousel from "react-native-snap-carousel";
import { DIMENSION, COLORS, APPEARANCES } from '../../../../module';
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";



// windowSize={1} 

const deviceWidth = Dimensions.get("window").width;
const originalHeight = 1080;
const originalWidth = 1920;
const width = deviceWidth * 0.8;
const height = originalHeight * width / originalWidth;

class SliderCarousel extends Component {
	sliderData = null
	constructor(props) {
		super(props);
		this.sliderData = this.props.data

		this.state = {
			item: this.sliderData[0]
		};
	}
	OpenUrl(facebook_url) {
		console.log("facebook_url:", facebook_url);
		Linking.openURL(facebook_url);
	}
	// OpenUrl(url) {
	// 	// console.log("CustomTabs.openURL(url):", url);
	// 	var link ="";
	// 	url.includes("http://") == true ? link = url : link = "http://"+url
	// 	CustomTabs.openURL(link);
	// 	// Linking.openURL("url:" + url);
	//   }
	_renderItem({ item, index }) {
		this.state
		return (
			<TouchableWithoutFeedback style={[styles.card, APPEARANCES.SHADOW]}>
				<View style={styles.coverContainer}>
					<Image source={{
						uri: item.media.file_url
					}} style={{ height: height, width: width }} />
				</View>
			</TouchableWithoutFeedback>
		);
	}

	changeIndex = (currentIndex) => {
		this.setState({ item: this.sliderData[currentIndex] })
	}

	render() {
		console.log("this.state.item.facebook_url:", this.state.item);
		const { language } = this.props.i18n;
		return (
			<View style={styles.cContainer}>
				{/* <Text style={styles.titleText}>
					{this.props.t("Video of Mekong Homes")}
				</Text> */}

				<View>
					<Carousel
						layout={"default"}
						ref={c => {
							this._carousel = c;
						}}
						data={this.sliderData}
						renderItem={item => this._renderItem(item)}
						sliderWidth={deviceWidth}
						itemWidth={width}
						autoplay={false}
						autoplayDelay={500}
						autoplayInterval={3000}
						loop={true}
						onSnapToItem={this.changeIndex}
					/>
					<View style={{ flex: 1, marginLeft: DIMENSION(5), marginLeft: DIMENSION(5), }}>
						{
							this.state.item ?
								<View style={styles.titileBankName}>
									<Text style={styles.nameBank}>
										{language == "kh" ? this.state.item.bank_name_kh : this.state.item.bank_name_en}
									</Text>
								</View>
								: null
						}
						{
							this.state.item ?
								<View style={styles.bankDescription}>
									{/* <Image
										source={require('../../../../asset/Icons/Home/Location.png')}
										style={styles.imageAddressBank}
									/> */}
									<Text style={styles.sentenceAddressBank}>
										{language == "kh" ? this.state.item.description_kh : this.state.item.description_en}
									</Text>
								</View>
								: null
						}
						{
							this.state.item ?
								<View style={styles.bankAddress}>
									<Image
										source={require('../../../../asset/Icons/Home/Location.png')}
										style={styles.imageAddressBank}
									/>
									<View style={{ width: DIMENSION(77) }}>
										<Text style={styles.sentenceAddressBank}>
											{language == "kh" ? this.state.item.address_kh : this.state.item.address_en}
										</Text>
									</View>

								</View>
								: null
						}
						{
							this.state.item ?
								<View style={styles.mailAddressBank}>
									<Entypo
										name="mail"
										size={25}
										iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
										tintColor='#000'
									/>
									<View style={{ top: 3 }}>
										<Text style={styles.textBankMail}>{this.state.item.email}</Text>
									</View>
								</View>
								: null
						}
						{
							this.state.item ?
								<View style={styles.phoneBank}>
									<FontAwesome
										name="phone"
										size={25}
										iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
										color='#000'
									/>
									<View style={{ top: 2 }}>
										<Text style={styles.textBankMail}>
											(+855) {this.state.item.phone_number}
										</Text>
									</View>
								</View>
								: null
						}

						<View style={{ paddingBottom: DIMENSION(5), flexDirection: 'row', alignItems: 'center', justifyContent: "center", paddingTop: DIMENSION(15) }}>
							{this.state.item.facebook_url ?
								<TouchableOpacity
									onPress={() => {
										Linking.openURL(this.state.item.facebook_url);
									}
									}
									style={styles.bottomSocial}
								>
									<View style={styles.buttomMenuSocail}>
										<Image
											source={require('../../../../asset/Icons/ContactUsSocialIcons/Facebook.png')}
											style={styles.imageIconFacebook}
										/>
									</View>
								</TouchableOpacity>
								: null
							}
							{this.state.item.linkin_url ?
								<TouchableOpacity
									onPress={() => {
										Linking.openURL(this.state.item.linkin_url);
									}}
									style={styles.bottomSocial}
								>
									<View style={styles.buttomMenu}>
										<Image
											source={require('../../../../asset/Icons/ContactUsSocialIcons/Link.png')}
											style={styles.imageIconFacebook}
										/>
									</View>
								</TouchableOpacity>
								: null
							}
							{this.state.item.gplus_url ?
								<TouchableOpacity
									onPress={() => {
										Linking.openURL(this.state.item.gplus_url);
									}}
									style={styles.bottomSocial}
								>
									<View style={styles.buttomMenu}>
										<Image
											source={require('../../../../asset/Icons/ContactUsSocialIcons/GooglePlus.png')}
											style={styles.imageIconFacebook}
										/>
									</View>
								</TouchableOpacity>
								: null
							}
							{this.state.item.youtube_url ?
								<TouchableOpacity
									onPress={() => {
										Linking.openURL(this.state.item.youtube_url);
									}}
									style={styles.bottomSocial}
								>
									<View style={styles.buttomMenu}>
										<Image
											source={require('../../../../asset/Icons/ContactUsSocialIcons/Youtube.png')}
											style={styles.imageIconFacebook}
										/>
									</View>
								</TouchableOpacity>
								: null
							}
							{this.state.item.twitter_url ?
								<TouchableOpacity
									onPress={() => {
										Linking.openURL(this.state.item.twitter_url);
									}}
									style={styles.bottomSocial}
								>
									<View style={styles.buttomMenu}>
										<Image
											source={require('../../../../asset/Icons/ContactUsSocialIcons/Twitter.png')}
											style={styles.imageIconFacebook}
										/>
									</View>
								</TouchableOpacity>
								: null
							}


						</View>
					</View>
				</View>
			</View>
		);
	}
}


export default (translate("common")(SliderCarousel));

const styles = {
	buttomMenu: {
		flexDirection: 'row',
		//paddingHorizontal: DIMENSION(2),
		marginTop: DIMENSION(1),

	},
	imageIconFacebook: {
		width: DIMENSION(14),
		height: DIMENSION(12),
	},
	bottomSocial: {
		marginTop: DIMENSION(-10),
		marginBottom: DIMENSION(5),
	},
	titileBankName: {
		right: 29,
		marginTop: DIMENSION(0),
		marginBottom: DIMENSION(0),
	},
	card: {
		marginVertical: 5,
		width: DIMENSION(70),
		height: DIMENSION(80),
		borderRadius: 12,
		overflow: 'hidden',
		marginHorizontal: 10,
		backgroundColor: '#fff',
		marginTop: DIMENSION(-1),
	},
	coverContainer: {
		width: '100%',
		// height: '50%',
		alignItems: 'center',
	},
	bodyBank: {
		flex: 1,
	},
	titleBank: {
		marginTop: DIMENSION(2),
		alignItems: 'center',
	},
	typeBank: {
		color: COLORS.SUBTEXT,
		fontFamily: 'Hanuman',
		fontWeight: 'bold',
		fontSize: 22,
	},
	sentenBank: {
		width: DIMENSION(70),
		marginVertical: DIMENSION(2),
		marginHorizontal: DIMENSION(5),
		fontSize: 15,
	},
	sentenBanktow: {
		width: DIMENSION(70),
		marginVertical: DIMENSION(2),
		marginHorizontal: DIMENSION(5),
		fontSize: 14,
	},
	bankAddress: {
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: DIMENSION(5),
		// with: DIMENSION(2)

	},
	nameBank: {
		marginLeft: 10,
	},
	bankDescription: {
		marginHorizontal: DIMENSION(5),
		marginTop: DIMENSION(0),
		marginBottom: DIMENSION(0),
		width: DIMENSION(90),

	},
	imageAddressBank: {
		width: DIMENSION(5),
		height: DIMENSION(5),
		marginRight: DIMENSION(6.5),
		marginLeft: DIMENSION(5),
		marginBottom: DIMENSION(4),
		// marginHorizontal: DIMENSION(5),
		// marginVertical: DIMENSION(4),
		tintColor: '#000',
	},
	nameBank: {
		width: DIMENSION(80),
		marginVertical: DIMENSION(5),
		fontSize: 17,
		fontWeight: 'bold',
		marginHorizontal: DIMENSION(15),
	},

	sentenceAddressBank: {
		fontSize: 14,
		marginBottom: DIMENSION(5),

	},
	mailAddressBank: {
		flexDirection: 'row',
		marginHorizontal: DIMENSION(5),
		marginBottom: DIMENSION(2),
		marginTop: DIMENSION(2),
	},
	textBankMail: {
		paddingHorizontal: DIMENSION(5),
	},
	phoneBank: {
		flexDirection: 'row',
		marginHorizontal: DIMENSION(5.5),
		marginVertical: DIMENSION(3),
	},
	bankAddress: {
		flexDirection: 'row',
		width: 1
	},
	viewFlex: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	},
	buttonText: {
		fontSize: 60,
		color: "black"
	},
	slide: {
		backgroundColor: "#3498db"
	},
	iconContainerStyle: {
		height: height,
		width: width,
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(52, 73, 94,0.3)"
	},
	iconSContainerStyle: {
		width: 100,
		height: 100,
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
		borderRadius: 50,
		borderWidth: 2,
		borderColor: "white"
	},
	iconStyle: { fontSize: 50, color: "white", marginLeft: 8 },
	cContainer: { paddingBottom: 32, },
	titleText: { paddingLeft: 16, paddingTop: 8, paddingBottom: 8 }
};