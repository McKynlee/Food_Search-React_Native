import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  // So now we only call yelp.get('/search') which will be tacked onto the baseURL

  headers: {
    Authorization: 'Bearer Da4ZK-wETfu-tYkuTDZ_98iMawxcWAxPdgAeDL57OhtT7y-ScgnVXGgK-g5beyv1Ax_Vhm4qMYbfCpd5g6yk-WcW7S3OTxYDqWmIHJ9frrc4J1BzyIdL5Vz5fuazYHYx'
  }
});