import {MapViewProps} from 'react-native-maps';

export const defaultMapProps: MapViewProps = {
  showsTraffic: true,
  showsUserLocation: true,
  followsUserLocation: true,
  showsMyLocationButton: false,
  showsCompass: false,
  toolbarEnabled: false,
  moveOnMarkerPress: false,
};
