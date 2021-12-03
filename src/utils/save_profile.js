import axios from 'axios';
import Cookies from 'js-cookie';


const saveProfile = async (profile) => {

    try{
        console.log(profile);
        const {name,email,avatar} = profile;
        console.log(name,email,avatar);
        const r = await axios.put(`https://dominos-backend8.herokuapp.com/api/auth/user/update`,{
            name,
            email,
            avatar,
        },{
            headers:{
                'Authorization': `${Cookies.get('AUTH_TOKEN')}`
            }
        });

        return r.data;

    }

    catch(err){
        console.log(err);
        return err;
    }
}

export default saveProfile;