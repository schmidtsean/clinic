class AppointmentsController < ApplicationController
  before_action :set_doctor
  def index 
    @appointments = @doctor.appointments
     render component: "Appointments", props: { doctor: @doctor, appointments: @appointments}
  end

  def new
    @appointment = @doctor.appointment.new 
    @users = User.all - @doctor.users
    render component: "AppointmentNew", props: { doctor: @doctor, appointment: @appointment, users: @users }
  
  end

  
  
  def create 
    @appointment = @doctor.appointments.new(appointment_params)
    if @enrollment.save
      redirect_to doctor_appointments_path(@doctor)
    else
      @users = User.all - @doctor.users
      render component: "AppointmentNew", props: { doctor: @doctor, appointment: @appointment, users: @users  }
    end
  end
  
  def destroy
    @appointment = @doctor.appointments.find(params[:id])
    @appointment.destroy
    redirect_to doctor_appointments_path(@doctor)
  end

  private 
    def set_doctor
      @doctor = Doctor.find(params[:doctor_id])
    end

    
    def appointment_params
      params.require(:appointment).permit(:role, :user_id)
    end
end
