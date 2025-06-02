import { EnumEstadoTurno } from '@/types/Turnos/EnumEstadoTurno';
import { Turno } from '@/types/Turnos/Turno';
import { URL_API } from '@/utils/global_variables/const';

export const getTurnoPorId = async (id: number): Promise<Turno> => {
    try {
        const response = await fetch(URL_API + `turnos/id/${id}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        })

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${await response.text()}`);
        }

        return await response.json();
    } catch (error: any) {

        throw new Error(error.message || 'Error al procesar la solicitud');
    }
}

export const getTurnosClientePorEmail = async (email: string): Promise<Turno[]> => {
    try {
        const response = await fetch(URL_API + `turnos/email/${email}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        })

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${await response.text()}`);
        }

        return await response.json();
    } catch (error: any) {

        throw new Error(error.message || 'Error al procesar la solicitud');
    }
}

export const getTurnosPorEstado = async (estado: EnumEstadoTurno): Promise<Turno[]> => {
    try {
        const response = await fetch(URL_API + `turnos/estado/${estado}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        })

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${await response.text()}`);
        }
        
        return await response.json();
    } catch (error: any) {
        throw new Error(error.message || 'Error al procesar la solicitud');
    }
}

export const getFechasOcupadas = async (): Promise<string[]> => {
    try {
        const response = await fetch(URL_API + `turnos/fechasOcupadas`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${await response.text()}`);
        }

        return await response.json();
    } catch (error: any) {

        throw new Error(error.message || 'Error al procesar la solicitud');
    }
}

export const crearTurno = async (turno: Turno): Promise<string> => {
    try {
        const response = await fetch(URL_API + `turnos/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(turno)
        })

        if (!response.ok) {
            throw new Error(await response.text());
        }

        return await response.text();
    } catch (error: any) {

        throw new Error(error.message || 'Error al procesar la solicitud');
    }
}

export const updateEstadoTurno = async (turno: Turno, estado: EnumEstadoTurno): Promise<string> => {
    turno.estado = estado;
    try {
        const response = await fetch(URL_API + 'turnos/update', {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(turno)
        })

        if (!response.ok) {
            throw new Error(await response.text() || 'Error al procesar la solicitud');
        }

        return 'Turno actualizado con éxito';
    } catch (error: any) {

        throw new Error(error.message || 'Error al procesar la solicitud');
    }
}


export const rechazarTurno = async (turno: Turno, motivo: string): Promise<string> => {
    turno.estado = EnumEstadoTurno.RECHAZADO;

    const params = new URLSearchParams();
    params.append('motivo', motivo);

    try {
        const response = await fetch(URL_API + 'turnos/rechazar?' + params.toString(), {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(turno)
        })

        if (!response.ok) {
            throw new Error(await response.text() || 'Error al procesar la solicitud');
        }

        return await response.text();
    } catch (error: any) {

        throw new Error(error.message || 'Error al procesar la solicitud');
    }
}