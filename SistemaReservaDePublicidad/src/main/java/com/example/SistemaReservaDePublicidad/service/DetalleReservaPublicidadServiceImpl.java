package com.example.SistemaReservaDePublicidad.service;

import com.example.SistemaReservaDePublicidad.model.DetalleReservaPublicidad;
import com.example.SistemaReservaDePublicidad.repository.DetalleReservaPublicidadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DetalleReservaPublicidadServiceImpl implements DetalleReservaPublicidadService{
    @Autowired
    private DetalleReservaPublicidadRepository detalleReservaPublicidadRepository;
    @Override
    public DetalleReservaPublicidad saveDetalleReserva(DetalleReservaPublicidad detalleReservaPublicidad) {
        return detalleReservaPublicidadRepository.save(detalleReservaPublicidad);
    }
    @Override
    public List<DetalleReservaPublicidad> getAllDetalleReservas() {
        return detalleReservaPublicidadRepository.findAll();
    }
    @Override
    public ResponseEntity<DetalleReservaPublicidad> getByIdDetalleReserva(Integer id){
        DetalleReservaPublicidad detalleReservaPublicidad =  detalleReservaPublicidadRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("Reserva no existe con el id: " + id));
        return ResponseEntity.ok(detalleReservaPublicidad);
    }

    @Override
    public ResponseEntity<DetalleReservaPublicidad> updateDetalleReserva(Integer id, DetalleReservaPublicidad detalleReserva){
        DetalleReservaPublicidad detalleReservaPublicidad =  detalleReservaPublicidadRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("Reserva no existe con el id: " + id));

        detalleReservaPublicidad.setCliente(detalleReserva.getCliente());
        detalleReservaPublicidad.setAgencia(detalleReserva.getAgencia());
        detalleReservaPublicidad.setEjecutivo(detalleReserva.getEjecutivo());
        detalleReservaPublicidad.setTipoaviso(detalleReserva.getTipoaviso());
        detalleReservaPublicidad.setMediopublicidad(detalleReserva.getMediopublicidad());
        detalleReservaPublicidad.setPublicacion(detalleReserva.getPublicacion());
        detalleReservaPublicidad.setEdicion(detalleReserva.getEdicion());
        detalleReservaPublicidad.setSeccion(detalleReserva.getSeccion());
        detalleReservaPublicidad.setSubseccion(detalleReserva.getSubseccion());
        detalleReservaPublicidad.setUbicacion(detalleReserva.getUbicacion());
        detalleReservaPublicidad.setTarifas(detalleReserva.getTarifas());
        detalleReservaPublicidad.setMedidas(detalleReserva.getMedidas());
        detalleReservaPublicidad.setColor(detalleReserva.getColor());
        detalleReservaPublicidad.setFechareserva(detalleReserva.getFechareserva());
        detalleReservaPublicidad.setTitulo(detalleReserva.getTitulo());
        detalleReservaPublicidad.setObservacion(detalleReserva.getObservacion());

        DetalleReservaPublicidad updateDetalleReservaPublicidad = detalleReservaPublicidadRepository.save(detalleReservaPublicidad);
        return ResponseEntity.ok(updateDetalleReservaPublicidad);
    }
}
