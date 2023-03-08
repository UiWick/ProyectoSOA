import axios from 'axios';
const RESERVA_PUBLICIDAD_API_BASE_URL = "http://localhost:8080/detalleReservaPublicidad";
class ReservaPublicidadService {
    getReservaPublicidad(){
        return axios.get(RESERVA_PUBLICIDAD_API_BASE_URL+"/getAll");
    }

    createReservaPublicidad(reservaDetails){
        return axios.post(RESERVA_PUBLICIDAD_API_BASE_URL+"/add",reservaDetails);
    }
}

export default new ReservaPublicidadService;  

