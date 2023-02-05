/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from 'services/api';
import { Court } from 'utils/types';

export function useCourts() {
  const [loading, setLoading] = useState(false);
  const [courts, setCourts] = useState<Court[]>([]);
  const [selectedCourt, setSelectedCourt] = useState<Court | null>(null);

  const getAllCourts = async () => {
    setLoading(true);

    try {
      const { data } = await api.court.getAll();
      setCourts(data || []);
    } catch (error: any) {
      toast.error(error?.response?.data.error || 'Erro ao buscar quadras');
    } finally {
      setLoading(false);
    }
  };

  const getCourtByName = async (name: string) => {
    setLoading(true);

    try {
      const { data } = await api.court.get(name);
      setSelectedCourt(data);
    } catch (error: any) {
      toast.error(error?.response?.data.error || 'Erro ao buscar quadra');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCourts();
  }, []);

  return {
    courts,
    selectedCourt,
    loading,
    getAllCourts,
    getCourtByName,
  };
}
