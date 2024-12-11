import api from './api';

// Exemple : récupérer tous les utilisateurs
export const fetchUsers = async () => {
    try {
        const response = await api.get('/graphql?query={users{id,name,email,role{id,nom}}}');
        console.log("users ------>",response.data);
        return response.data; // Les données retournées par Laravel
    } catch (error) {
        throw error; // Gérer les erreurs
    }
};

// // Exemple : envoyer un POST avec des données
// export const createUser = async (userData: { name: string; email: string }) => {
//     try {
//         const response = await api.post('/users', userData);
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// };
