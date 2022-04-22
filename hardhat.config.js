/**
 * @type import('hardhat/config').HardhatUserConfig
 */

import 'dotenv/config'
import '@nomiclabs/hardhat-ethers'

const {ALCHEMY_API_URL, METAMASK_PRIVATE_KEY} = process.env

module.exports = {
    solidity: '0.7.3',
    defaultNetwork: 'ropsten',
    networks: {
        hardhat: {},
        ropsten: {
            url: ALCHEMY_API_URL,
            accounts: [`0x#{METAMASK_PRIVATE_KEY}`]
        }
    },
}
