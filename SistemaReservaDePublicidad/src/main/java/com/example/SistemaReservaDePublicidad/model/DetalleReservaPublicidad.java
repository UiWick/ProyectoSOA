package com.example.SistemaReservaDePublicidad.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Date;
@Entity
public class DetalleReservaPublicidad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String cliente;
    private String agencia;
    private String ejecutivo;
    private String tipoaviso;
    private String mediopublicidad;
    private String publicacion;
    private String edicion;
    private String seccion;
    private String subseccion;
    private String ubicacion;
    private String tarifas;
    private String medidas;
    private String color;
    private Date fechareserva;
    private String titulo;
    private String observacion;

    public DetalleReservaPublicidad() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCliente() {
        return cliente;
    }

    public void setCliente(String cliente) {
        this.cliente = cliente;
    }

    public String getAgencia() {
        return agencia;
    }

    public void setAgencia(String agencia) {
        this.agencia = agencia;
    }

    public String getEjecutivo() {
        return ejecutivo;
    }

    public void setEjecutivo(String ejecutivo) {
        this.ejecutivo = ejecutivo;
    }

    public String getTipoaviso() {
        return tipoaviso;
    }

    public void setTipoaviso(String tipoaviso) {
        this.tipoaviso = tipoaviso;
    }

    public String getMediopublicidad() {
        return mediopublicidad;
    }

    public void setMediopublicidad(String mediopublicidad) {
        this.mediopublicidad = mediopublicidad;
    }

    public String getPublicacion() {
        return publicacion;
    }

    public void setPublicacion(String publicacion) {
        this.publicacion = publicacion;
    }

    public String getEdicion() {
        return edicion;
    }

    public void setEdicion(String edicion) {
        this.edicion = edicion;
    }

    public String getSeccion() {
        return seccion;
    }

    public void setSeccion(String seccion) {
        this.seccion = seccion;
    }

    public String getSubseccion() {
        return subseccion;
    }

    public void setSubseccion(String subseccion) {
        this.subseccion = subseccion;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public String getTarifas() {
        return tarifas;
    }

    public void setTarifas(String tarifas) {
        this.tarifas = tarifas;
    }

    public String getMedidas() {
        return medidas;
    }

    public void setMedidas(String medidas) {
        this.medidas = medidas;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Date getFechareserva() {
        return fechareserva;
    }

    public void setFechareserva(Date fechareserva) {
        this.fechareserva = fechareserva;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getObservacion() {
        return observacion;
    }

    public void setObservacion(String observacion) {
        this.observacion = observacion;
    }
}
