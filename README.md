# HopeHarbour - A Decentralized Crowdfunding Platform for Medical Bills

HopeHarbour is a decentralized crowdfunding platform that allows individuals to afford their medical bills. The platform is built using ReactJS, Solidity, web3js, and third-party SDKs. 

## About the Platform

HopeHarbour is a crowdfunding DApp where people can post their medical financial needs and raise money for it. The platform allows donors to contribute to the medical bills of those in need, and provides a transparent and secure way for funds to be transferred directly to the recipient.

The HopeHarbour DApp is built on top of the Ethereum blockchain, utilizing smart contracts to facilitate transactions. It also incorporates a user-friendly interface with features such as search and filtering of campaigns, as well as the ability to create and manage campaigns.

## Screenshots

![Landing Page](/screenshots/Screenshot(287).png)

![Dashboard](/screenshots/Screenshot(288).png)

![Create Campaign](/screenshots/Screenshot(289).png)


## Repository Contents

The HopeHarbour repository contains the following files and folders:

### `web3` Folder

The `web3` folder contains the necessary configuration files for interacting with the Ethereum blockchain. These files include:

- `contracts`: This folder contains the Solidity smart contract used for the HopeHarbour platform.

- `deployArgs.json`: This file contains the arguments used to deploy the smart contract.

- `hardhat.config.js`: This file contains the configuration for the Hardhat development environment.

- `package.json` and `yarn.lock`: These files contain the dependencies for the web3 portion of the project.

### `client` Folder

The `client` folder contains the frontend code for the HopeHarbour platform, built using ReactJS. This code includes the following files:

- `src`: This folder contains the source code for the React application, including the components used to build the UI.

- `index.html`: This file is the main HTML file for the React application.

- `package.json` and `package-lock.json`: These files contain the dependencies for the client portion of the project.

- `postcss.config.js`, `tailwind.config.js`, and `vite.config.js`: These files contain the configuration for the development environment and styling of the React application.

### Other Files

In addition to the `web3` and `client` folders, the repository also contains the following files:

- `.gitignore`: This file specifies which files and folders should be ignored when committing changes.

- `LICENSE.md`: This file contains the license for the HopeHarbour platform.

- `README.md`: This file contains information about the platform and instructions for getting started.

- `vercel.json`: This file contains the configuration for deploying the React application on Vercel.

## Running the Project

To run the HopeHarbour project, please follow these steps:

1. Clone the repository by running the following command in your terminal:
```
git clone https://github.com/roshangeorge97/HopeHarbour.git
```


2. Navigate to the `client` folder by running the following command:

```
cd client
```

3. Install the required dependencies by running the following command:
```
npm install
```

4. Start the development server by running the following command:
```
npm run dev
```

## Deployment

The HopeHarbour platform is deployed on Vercel and can be accessed at the following link:

https://hopeharbour.vercel.app/

## Contributing

If you would like to contribute to the development of HopeHarbour, please fork the repository and create a pull request with your changes.

## License

HopeHarbour is licensed under the MIT License. See the LICENSE.md file for more information.

