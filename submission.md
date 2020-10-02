# React-Native
# ADV-LAB-3SA04
# เครื่องมือที่จำเป็น
-	Chocolatey (for Windows), Brew (for OSX)
-	Node.js
-	Yarn
-	Git
-	expo CLI
-	Visual Studio Code
-	Android Studio

หลังจากที่ได้ติดตั้ง Chocolatey ในเครื่องแล้ว สามารถติดตั้ง Node.js, Yarn และ Git ได้ผ่าน Chocolatey ผ่าน Command Prompt (ที่รันด้วยสิทธิ์ Administrator)
โดยสามารถใช้คำสั่งดังนี้ 
- choco install nodejs
- choco install yarn
- choco install git

# การใช้งาน React-Native
ในการติดตั้ง create-react-app CLI สามารถทำผ่านการใช้คำสั่ง yarn ผ่าน Command Prompt (ที่รันด้วยสิทธิ์ Administrator)
โดยสามารถใช้คำสั่งดังนี้ 
- yarn global add expo-cli

สร้าง Project สำหรับการพัฒนา React Native ด้วย expo โดยสามารถใช้คำสั่งดังนี้ 
- expo init wt-app
- cd wt-app 

รันโปรแกรมด้วยคำสั่ง
- yarn start

# การติดตั้ง Navigation-Library
สามารถติดตั้ง Library ผ่าน Command Prompt ด้วยคำสั่งดังนี้
- expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
- yarn add @react-navigation/stack @react-navigation/native

# การติดตั้ง React-Native-Router-Flux
สามารถติดตั้ง Library ผ่าน Command Prompt ด้วยคำสั่งดังนี้
- expo install react-native-router-flux
- yarn add react-native-router-flux
