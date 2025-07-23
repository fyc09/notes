# Notes for Open Yale Courses: Fundamentals of Physics II

## Electromagnetism

Coulomb's Law:

$$
\boldsymbol{F}_{21}=-\boldsymbol{F}_{12}=\frac{q_1q_2}{4 \pi \epsilon_0r_{12}^2}\mathbf{e_{12}},
$$

where

$$
\boldsymbol{r_{12}}=|\boldsymbol{r_1}-\boldsymbol{r_2|}.
$$

In an electric dipole, the charges are $q$ and $-q$. We call the dipole moment

$$
\boldsymbol{p}=2aq\boldsymbol{i}.
$$

In an electric field, the torque on the dipole is

$$
\boldsymbol{\tau}=\boldsymbol{p}\times\boldsymbol{E}.
$$

Gauss's Law:

$$
\oint_{S=\partial V}\boldsymbol{E}(\boldsymbol{r})\cdot\mathrm{d}\boldsymbol{S}=\frac{1}{\epsilon_0}q_{enc}=\frac{1}{\epsilon_0}\int_V\rho(\boldsymbol{r})\mathrm{d}^3\boldsymbol{r},
$$

where $\rho(\boldsymbol{r})$ is the charge density at $\boldsymbol{r}$, and $q_{enc}$ is the total charge *enclosed* in volume $V$.

Charges are distributed on a conductor's surface. On a conductor's surface, the density of electric field is

$$
\boldsymbol{E}_\bot=\frac{\sigma}{\epsilon_0}.
$$

Inside a conductor, the electric field is 0.

Energy density stored in an electric field can be calculated by the energy of a capacitor, which is

$$
U_{E}=\frac{\epsilon_0}{2}\boldsymbol{E}^2
$$

When charges are moving in a magnetic field, the charges will experience a Lorentz force:

$$
\boldsymbol{F}=q(\boldsymbol{E} +\boldsymbol{v}\times\boldsymbol{B}).
$$

Because the magnetic force is always perpendicular to the velocity, the force does no work.

The force on a segment of wire in a magnetic field is

$$
\mathrm{d}\boldsymbol{F}=I\mathrm{d}\boldsymbol{l}\times\boldsymbol{B}.
$$

Consider a wire loop with a current $I$ in a magnetic field. The area of the loop is $\boldsymbol{A}$. The torque on the loop is

$$
\boldsymbol{\tau}=\boldsymbol{\mu}\times\boldsymbol{B},
$$

where $\boldsymbol{\mu}$ is the magnetic moment,

$$
\boldsymbol{\mu}=I\boldsymbol{A}.
$$

Biot-Savart Law:

$$
\mathrm{d}\boldsymbol{B}=\frac{\mu_0}{4\pi}\frac{\mathrm{d}\boldsymbol{l}\times\mathbf{e}_{\boldsymbol{r}-\boldsymbol{r'}}}{(\boldsymbol{r}-\boldsymbol{r^{\prime}})^2},
$$

where $\boldsymbol{r}$ is the position of the current, $\boldsymbol{r^{\prime}}$ is the position of magnetic field.

Ampere’s Law:

$$
\oint_{C=\partial S}\boldsymbol{B}\cdot\mathrm{d}\boldsymbol{r}=\mu_0I_{enc}=\mu_0\int_{S}\boldsymbol{j}\cdot \mathrm{d}\boldsymbol{S},
$$

where $I_{enc}$ is the total current *penetrating* surface $S$.

Maxwell's Equations (Static):

$$
\begin{cases}
\oint_{S}\boldsymbol{E}\cdot\mathrm{d}\boldsymbol{S}=\frac{1}{\epsilon_0}q_{enc} & (\text{Gauss's Law})\\
\oint_{C}\boldsymbol{B}\cdot\mathrm{d}\boldsymbol{r}=\mu_0I_{enc} & (\text{Ampere's Law})\\
\oint_{C}\boldsymbol{E}\cdot\mathrm{d}\boldsymbol{r}=0 & (\boldsymbol{E}\text{ is conservative})\\
\oint_{S}\boldsymbol{B}\cdot\mathrm{d}\boldsymbol{S}=0 & (\text{No single magnetic pole})
\end{cases}
$$

The Lenz's Law:

$$
\mathcal{E}=-\frac{\mathrm{d}\Phi}{\mathrm{d}t},
$$

where $C$ is a loop made up of a real conductor, $\Phi$ is the magnetic flux through $C$,

$$
\Phi=\int_{S}\boldsymbol{B}\cdot\mathrm{d}\boldsymbol{S},
$$

where $S$ is the surface of the loop $C$.

The EMF $\mathcal{E}$ can be calculated by the following equation:

$$
\mathcal{E}=\oint_{C}(\boldsymbol{E}+\boldsymbol{v}\times\boldsymbol{B})\cdot\mathrm{d}\boldsymbol{l}
$$

Plug the definition of $\Phi$ into Lenz's Law, we get Faraday's Law:

$$
\oint_{C=\partial S}\boldsymbol{E}\cdot\mathrm{d}\boldsymbol{r}=-\int_{S}\frac{\partial\boldsymbol{B}}{\partial t}\cdot\mathrm{d}\boldsymbol{S}.
$$

This equation replaces the 3<sup>rd</sup> equation in the previous version of Maxwell's Equation $\oint_{C}\boldsymbol{E}\cdot\mathrm{d}\boldsymbol{r}=0$, which shows that a moving magnetic field can excite a *non-conservative* electric field.

The change of flux of magnetic field through a loop can be caused by two reasons: The change of magnetic field, or the movement of loop, shown in the following equation:

$$
-\mathcal{E}=\frac{\mathrm{d}\Phi}{\mathrm{d}t}=\int_{S}\frac{\partial\boldsymbol{B}}{\partial t}\cdot\mathrm{d}\boldsymbol{A}+\oint_{C}(\boldsymbol{v}\times\mathrm{d}\boldsymbol{l})\cdot\boldsymbol{B}.
$$

The energy density stored in the magnetic field can be calculated by energy in a inductor, which is

$$
U_{B}=\frac{1}{2\mu_{0}}\boldsymbol{B}^2.
$$

Ampere-Maxwell Law:

$$
\oint_{C=\partial S}\boldsymbol{B}\cdot\mathrm{d}\boldsymbol{r}=\mu_0(I_{enc}+I_{d})=\mu_0\int_{S}\left(\boldsymbol{j}+\epsilon_0\frac{\partial\boldsymbol{E}}{\partial t}\right)\cdot \mathrm{d}\boldsymbol{S},
$$

where $I_{d}$ is displacement current

$$
I_{d}=\frac{\partial\Phi}{\partial t}.
$$

Maxwell's Equations:

$$
\begin{cases}
\oint_{S=\partial V}\boldsymbol{E}\cdot\mathrm{d}\boldsymbol{S}=\frac{1}{\epsilon_0}\int_{V}\rho\mathrm{d}^3r & (\text{Gauss's Law})\\
\oint_{S=\partial V}\boldsymbol{B}\cdot\mathrm{d}\boldsymbol{S}=0 & (\text{No single magnetic pole})\\
\oint_{C=\partial S}\boldsymbol{E}\cdot\mathrm{d}\boldsymbol{r}=\int_S\left(-\frac{\partial\boldsymbol{B}}{\partial t}\right)\cdot\mathrm{d}\boldsymbol{S} & (\text{Faraday's Law})\\
\oint_{C=\partial S}\boldsymbol{B}\cdot\mathrm{d}\boldsymbol{r}=\mu_0\int_{S}\left(\boldsymbol{j}+\epsilon_0\frac{\partial\boldsymbol{E}}{\partial t}\right)\cdot \mathrm{d}\boldsymbol{S} & (\text{Ampere-Maxwell Law})\\
\end{cases}
$$

By considering tiny cubes and loops, we can get the differential form of the Maxwell's Equations:

$$
\begin{cases}
\nabla\cdot\boldsymbol{E}=\frac{\rho}{\epsilon_0} & (\text{Gauss's Law})\\
\nabla\cdot\boldsymbol{B}=0 & (\text{No single magnetic pole})\\
\nabla\times\boldsymbol{E}=-\frac{\partial\boldsymbol{B}}{\partial t} & (\text{Faraday's Law})\\
\nabla\times\boldsymbol{B}=\mu_0\boldsymbol{j}+\mu_0\epsilon_0\frac{\partial \boldsymbol{E}}{\partial t} & (\text{Ampere-Maxwell Law})\\
\end{cases}
$$

## Electromagnetic Wave

When in a free space, where $q$ and $I$ are zero, we found a solution for Maxwell's Equations that satisfies the wave equation:

$$
\begin{cases}
\frac{\partial^2\boldsymbol{E}_z}{\partial t^2}=\mu_0\epsilon_0\frac{\partial^2\boldsymbol{E}_z}{\partial t^2}\\
\frac{\partial^2\boldsymbol{B}_x}{\partial t^2}=\mu_0\epsilon_0\frac{\partial^2\boldsymbol{B}_x}{\partial t^2}
\end{cases}
$$

We can get the speed of this wave is

$$
c=\frac{1}{\sqrt{\mu_0\epsilon_0}}.
$$

When $\boldsymbol{E}=\hat{k}E_0\sin(ky-\omega t)$, $\boldsymbol{B}=\hat{\imath} E_0\sin(ky-\omega t)$, we can get the relation between $E_0$ and $B_0$:

$$
E_0=\frac{\omega}{k}B_0=\frac{c^2k}{\omega}B_0=cB_0,
$$

because we found that $\omega=ck$.

We calculate the energy of electric field and magnetic field,

$$
U_E=U_B=\frac{\epsilon_0}{2}\sin^2(ky-\omega t),
$$

so the average total energy density of wave is

$$
U_T=\frac{1}{2\pi/\omega}\int_0^{2\pi/\omega}\epsilon_0E_0^2\sin(ky-\omega t)\mathrm{d}t=\frac{\epsilon_0 E_0^2}{2}.
$$

The intensity of the wave is energy per unit area, also equals to the energy density times velocity,

$$
I=\frac{E_0B_0}{\mu_0}\sin^2(ky-\omega t).
$$

Poynting Vector:

$$
\boldsymbol{S}=\frac{\boldsymbol{E}\times\boldsymbol{B}}{c}.
$$

The Poynting vector has the direction of the electromagnetic wave, and the magnitude of the Poynting vector is the intensity of the wave:

$$
\left\vert\boldsymbol{S}\right\vert=I.
$$

## Circuits

Resister($R$) (Ohm's law):

$$
V(t)=RI(t)
$$

Capacitor($C$):

$$
V(t)=\frac{Q(t)}{C}=\frac{1}{C}\int^tI(t^{\prime})\mathrm{d}t^{\prime}
$$

Inductor($L$):

$$
V(t^{\prime})=L\left.\frac{\mathrm{d}I}{\mathrm{d}t}\right\vert_{t=t^{\prime}}
$$

Kirchhoff's Voltage Law (KVL): In any closed loop network, the total EMF is equal to the sum of Potential Difference drops.

$$
\sum V=0
$$

Kirchhoff's Current Law (KCL): Total current entering a junction is equal to total current leaving it.

$$
\sum I=0
$$

In an AC circuit, the impedance ($Z$) of an electric component shows the dynamic relationship between the voltage and current, following complex form of Ohm's law

$$
V_0=\tilde{I}_0Z,
$$

where $V_0$ is the maximum voltage, $Z$ is the impedance, and the real part of $\tilde{I}_0$ is the maximum current.

The current varying with time is

$$
I(t)=\mathrm{Re}\left\lbrack\frac{V_0}{\left\vert Z\right\vert}\frac{e^{i\omega t}}{e^{i\phi}}\right\rbrack=\frac{V_0}{\left\vert Z\right\vert}\cos\left(\omega t-\phi\right),
$$

where

$$
\tan\phi=\frac{\mathrm{Im}\left[Z\right]}{\mathrm{Re}\left[Z\right]}.
$$

The impedance of a resistor equals its resistance,

$$
Z_R=R.
$$

The impedance of a capacitor is given by

$$
Z_C=\frac{1}{i\omega C},
$$

where $\omega$ is the angular frequency of the AC signal.

The impedance of an inductor is given by

$$
Z_L=i\omega L.
$$

To calculate the average power of a circuit, we integrate the product of voltage and current over time divided by time,

$$
P=\frac{1}{T}\int_0^T\frac{V_0^2}{\left\vert Z\right\vert}\left\vert \cos\omega t\right\vert\left\vert cos(\omega t-\phi)\right\vert=\frac{V_0^2}{\left\vert Z\right\vert}\frac{\cos \phi}{2}=\frac{1}{2}\left\vert I_0\right\vert^2R,
$$

We found that all power is dissipated in the resistor.

Note that the power is not equal to $\tilde{I}(t)\tilde{V}(t)$, because the power is not linear.

## Copyright

Copyright (C) 2025 Yuchen Fu
