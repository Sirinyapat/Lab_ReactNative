# Lab_ReactNative
# วิธีการเพิ่ม Date ลงใน ReactNative
- ทำการติดตั้ง yarn add moment             
- เมื่อติดตั้งเสร็จ **อย่าลืม import ทุกครั้ง >> import moment from 'moment';
- const date = moment().format('MMMM Do YYYY, h:mm a'); // ทำใน useEffect โดยทำการกำหนดตัวแปรมา 1 ตัว เพือใช้ในการนำมารับค่า
------------------------------------------------------------------------------------------------------------------------------
# วิธการเพิ่ม Icon ลงใน ReactNative
- ทำการติดตั้ง yarn add react-native-vector-icons
- เมื่อติดตั้งเสร็จ **อย่าลืม import ทุกครั้ง >> import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // ตรงหลัง / เป็นชื่อของ react-native-vector-icons directory
- Icon name="location-pin" size={32} color="white" / >> ทำในส่วนของ return
