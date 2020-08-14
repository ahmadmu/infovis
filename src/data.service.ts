import axios from 'axios';

export default {
    getNavigation(screen: string) {
        return axios.get('./data/navigation.json').then(res => {
            return res.data[screen];
        }).catch(error => 'An error happened: ' + error)
    },
    getData(screen: string) {
        return axios.get('./data/'+screen+'.json');
    }
}