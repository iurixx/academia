# Gym App

This is a free gym app template in development.

## Installation

### Windows

Install node:

- Go to the [Node site](https://nodejs.org/en/download) download it and install.
- Access the project page and run the node command to install the dependencies.

```bash
npm install
```

### Linux

Install node:

- Run the install command corresponding to your linux system

```bash
#fedora
sudo dnf install node -y
#ubuntu
sudo apt install node -y
```

- Access the project page and run the node command to install the dependencies.

```bash
npm install
```

- For Android

Install Android SDK, download it [here](https://developer.android.com/studio/index.html#downloads) - chose the "command options only"
Unzip, open the unzipped folder and run the following commands to install all dependencies and run the emulated device

Install android sdk dependencies:

```bash
bin/sdkmanager --install "build-tools;34.0.0" "cmdline-tools;latest" "emulator" "extras;google;auto" "platform-tools" "platforms;android-34" "tools"
```

Install android image if your PC is Intel:

```bash
bin/sdkmanager --install "system-images;android-34;google_apis_playstore;x86_64"
```

Install android image if your PC is AMD:

```bash
bin/sdkmanager --install "system-images;android-34;google_apis_playstore;arm64-v8a"
```

Create virtual device (AVD):

```bash
bin/avdmanager create avd --force --name android-academia --abi google_apis_playstore/x86_64 --package 'system-images;android-34;google_apis_playstore;x86_64' --device "Nexus 6P"
```

Run the new avd created as a sandbox emulated device:

```bash
emulator @android-academia
```

## Usage

```bash
# to start the project with the command palete
npm run start
# to start the project for android
npm run android
# to start the project for ios
npm run ios
# to start the project for web
npm run web
```

## Used Libs documentation

- Expo - [here](https://docs.expo.dev/)
- Lodash - [here](https://lodash.com/)
- React Translate - [here](https://react.i18next.com/getting-started)
- MUI Core - [here](https://mui.com/material-ui/getting-started/overview/)
- React Navigation - [here](https://reactnavigation.org/docs/getting-started/)

## License

[GNU GPL v3](https://choosealicense.com/licenses/gpl-3.0/)
