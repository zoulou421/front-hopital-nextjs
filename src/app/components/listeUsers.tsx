"use client";

import { useEffect, useState } from 'react';
import { fetchUsers } from '../services/userService';
import { IUser } from '../services/IUser';

const UserList = () => {
    // Typage explicite des états
    const [users, setUsers] = useState<IUser[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true); // Indicateur de chargement

    useEffect(() => {
        const getUsers = async () => {
            try {
                setLoading(true); // Démarrage du chargement
                const data = await fetchUsers(); // fetchUsers est typé pour retourner IUser[]
                console.log("users --->",data);
                // setUsers(data);
            } catch (err: any) {
                setError(err.message || 'Une erreur est survenue');
            } finally {
                setLoading(false); // Fin du chargement
            }
        };

        getUsers();
    }, []);

    if (loading) {
        return <p>Chargement des utilisateurs...</p>; // Indicateur de chargement
    }

    if (error) {
        return <p>Erreur : {error}</p>; // Message d'erreur
    }

    return (
        <div>
            <h1>Liste des utilisateurs</h1>
            {users.length > 0 ? (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Aucun utilisateur trouvé.</p>
            )}
        </div>
    );
};

export default UserList;
