/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import type { Court } from 'utils/types';
import api from 'services/api';
import { toast } from 'react-toastify';

export function useCourts() {
  const [courts, setCourts] = useState<Court[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCourts = async () => {
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

  const getCourt = async (name: string) => {
    setLoading(true);

    try {
      const { data } = await api.court.get(name);
      return data;
    } catch (error: any) {
      toast.error(error?.response?.data.error || 'Erro ao buscar quadra');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourts();
  }, []);

  return { courts, loading, getCourt };
}
