/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from 'services/api';
import { Court } from 'utils/types';

export function useCourts() {
  const [loading, setLoading] = useState(false);
  const [courts, setCourts] = useState<Court[]>([]);
  const [selectedCourt, setSelectedCourt] = useState<Court | null>(null);

  const getAllCourts = useCallback(async () => {
    setLoading(true);
    const { data, error } = await api.court.getAll();
    setLoading(false);

    if (error) {
      toast.error(error || 'Erro ao buscar quadras');
      return;
    }

    setCourts(data || []);
  }, []);

  const getCourtByName = useCallback(async (name: string) => {
    setLoading(true);
    const { data, error } = await api.court.get(name);
    setLoading(false);

    if (error) {
      toast.error(error || 'Erro ao buscar quadra');
      return;
    }

    setSelectedCourt(data);
  }, []);

  useEffect(() => {
    getAllCourts();
  }, [getAllCourts]);

  return {
    courts,
    selectedCourt,
    loading,
    getAllCourts,
    getCourtByName,
  };
}
