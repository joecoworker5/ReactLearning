import axios from 'axios';

const searchImage = async (term) => {
   const response =  await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: 'Client-ID x1IxUXxiofftKI_yeLlfTLAZaU3EAq95k4yjtPzEUz0'
        },
        params: {
            query: term
        }
    })

    return response.data.results;
}

export default searchImage;