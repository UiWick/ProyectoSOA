package com.example.SistemaReservaDePublicidad.controller;

import com.example.SistemaReservaDePublicidad.model.DetalleReservaPublicidad;
import com.example.SistemaReservaDePublicidad.service.DetalleReservaPublicidadService;
import com.example.SistemaReservaDePublicidad.service.DetalleReservaPublicidadServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/detalleReservaPublicidad")
@CrossOrigin
public class DetalleReservaPublicidadController {
    @Autowired
    private DetalleReservaPublicidadService detalleReservaPublicidadService;

    @PostMapping("/add")
    public String add(@RequestBody DetalleReservaPublicidad detalleReservaPublicidad){
        detalleReservaPublicidadService.saveDetalleReserva(detalleReservaPublicidad);
        return "Nueva reserva fue agregada";
    }

    @GetMapping("/getAll")
    public List<DetalleReservaPublicidad> getAllDetalleReservas(){
        return detalleReservaPublicidadService.getAllDetalleReservas();
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<DetalleReservaPublicidad> getByIdDetalleReserva(@PathVariable Integer id){
        return detalleReservaPublicidadService.getByIdDetalleReserva(id);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<DetalleReservaPublicidad> updateDetalleReservaPublicidad(@PathVariable Integer id, @RequestBody DetalleReservaPublicidad detalleReservaPublicidad){
        return detalleReservaPublicidadService.updateDetalleReserva(id,detalleReservaPublicidad);
    }
}
