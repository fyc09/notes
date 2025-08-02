# Notes for Open Yale Courses: Fundamentals of Physics II

## Electromagnetism

$$
% \newcommand{\frac}{\dfrac}
\newcommand{\dd}{\mathrm{d}}
\newcommand{\bs}{\boldsymbol}
$$

Coulomb's Law:

$$
\bs{F}_{21}=-\bs{F}_{12}=\frac{q_1q_2}{4 \pi \epsilon_0r_{12}^2}\mathbf{e_{12}},
$$

where

$$
\bs{r_{12}}=|\bs{r_1}-\bs{r_2|}.
$$

In an electric dipole, the charges are $q$ and $-q$. We call the dipole moment

$$
\bs{p}=2aq\bs{i}.
$$

In an electric field, the torque on the dipole is

$$
\bs{\tau}=\bs{p}\times\bs{E}.
$$

Gauss's Law:

$$
\oint_{S=\partial V}\bs{E}(\bs{r})\cdot\dd\bs{S}=\frac{1}{\epsilon_0}q_{enc}=\frac{1}{\epsilon_0}\int_V\rho(\bs{r})\dd^3\bs{r},
$$

where $\rho(\bs{r})$ is the charge density at $\bs{r}$, and $q_{enc}$ is the total charge _enclosed_ in volume $V$.

Charges are distributed on a conductor's surface. On a conductor's surface, the density of electric field is

$$
\bs{E}_\bot=\frac{\sigma}{\epsilon_0}.
$$

Inside a conductor, the electric field is 0.

Energy density stored in an electric field can be calculated by the energy of a capacitor, which is

$$
U_{E}=\frac{\epsilon_0}{2}\bs{E}^2
$$

When charges are moving in a magnetic field, the charges will experience a Lorentz force:

$$
\bs{F}=q(\bs{E}+\bs{v}\times\bs{B}).
$$

Because the magnetic force is always perpendicular to the velocity, the force does no work.

The force on a segment of wire in a magnetic field is

$$
\dd\bs{F}=I\dd\bs{l}\times\bs{B}.
$$

Consider a wire loop with a current $I$ in a magnetic field. The area of the loop is $\bs{A}$. The torque on the loop is

$$
\bs{\tau}=\bs{\mu}\times\bs{B},
$$

where $\bs{\mu}$ is the magnetic moment,

$$
\bs{\mu}=I\bs{A}.
$$

Biot-Savart Law:

$$
\dd\bs{B}=\frac{\mu_0}{4\pi}\frac{\dd\bs{l}\times\mathbf{e}_{\bs{r}-\bs{r'}}}{(\bs{r}-\bs{r^{\prime}})^2},
$$

where $\bs{r}$ is the position of the current, $\bs{r^{\prime}}$ is the position of magnetic field.

Ampere's Law:

$$
\oint_{C=\partial S}\bs{B}\cdot\dd\bs{r}=\mu_0I_{enc}=\mu_0\int_{S}\bs{j}\cdot\dd\bs{S},
$$

where $I_{enc}$ is the total current _penetrating_ surface $S$.

Maxwell's Equations (Static):

$$
\begin{gather}
\oint_{S}\bs{E}\cdot\dd\bs{S}=\frac{1}{\epsilon_0}q_{enc} & (\text{Gauss's Law})\\
\oint_{C}\bs{B}\cdot\dd\bs{r}=\mu_0I_{enc} & (\text{Ampere's Law})\\
\oint_{C}\bs{E}\cdot\dd\bs{r}=0 & (\bs{E}\text{ is conservative})\\
\oint_{S}\bs{B}\cdot\dd\bs{S}=0 & (\text{No single magnetic pole})
\end{gather}
$$

The Lenz's Law:

$$
\mathcal{E}=-\frac{\dd\Phi}{\dd t},
$$

where $C$ is a loop made up of a real conductor, $\Phi$ is the magnetic flux through $C$,

$$
\Phi=\int_{S}\bs{B}\cdot\dd\bs{S},
$$

where $S$ is the surface of the loop $C$.

The EMF $\mathcal{E}$ can be calculated by the following equation:

$$
\mathcal{E}=\oint_{C}(\bs{E}+\bs{v}\times\bs{B})\cdot\dd\bs{l}
$$

Plug the definition of $\Phi$ into Lenz's Law, we get Faraday's Law:

$$
\oint_{C=\partial S}\bs{E}\cdot\dd\bs{r}=-\int_{S}\frac{\partial\bs{B}}{\partial t}\cdot\dd\bs{S}.
$$

This equation replaces the 3<sup>rd</sup> equation in the previous version of Maxwell's Equation $\oint_{C}\bs{E}\cdot\dd\bs{r}=0$, which shows that a moving magnetic field can excite a _non-conservative_ electric field.

The change of flux of magnetic field through a loop can be caused by two reasons: The change of magnetic field, or the movement of loop, shown in the following equation:

$$
-\mathcal{E}=\frac{\dd\Phi}{\dd t}=\int_{S}\frac{\partial\bs{B}}{\partial t}\cdot\dd\bs{A}+\oint_{C}(\bs{v}\times\dd\bs{l})\cdot\bs{B}.
$$

The energy density stored in the magnetic field can be calculated by energy in a inductor, which is

$$
U_{B}=\frac{1}{2\mu_{0}}\bs{B}^2.
$$

Ampere-Maxwell Law:

$$
\oint_{C=\partial{S}}\bs{B}\cdot\dd\bs{r}=\mu_0(I_{enc}+I_{d})=\mu_0\int_{S}\left(\bs{j}+\epsilon_0\frac{\partial\bs{E}}{\partial t}\right)\cdot \dd\bs{S},
$$

where $I_{d}$ is displacement current

$$
I_{d}=\frac{\partial\Phi}{\partial t}.
$$

Maxwell's Equations:

$$
\begin{gather}
\oint_{S=\partial{V}}\bs{E}\cdot\dd\bs{S}=\frac{1}{\epsilon_0}\int_{V}\rho\dd^3r & (\text{Gauss's Law})\\
\oint_{S=\partial{V}}\bs{B}\cdot\dd\bs{S}=0 & (\text{No single magnetic pole})\\
\oint_{C=\partial S}\bs{E}\cdot\dd\bs{r}=\int_S\left(-\frac{\partial\bs{B}}{\partial{t}}\right)\cdot\dd\bs{S} & (\text{Faraday's Law})\\
\oint_{C=\partial{S}}\bs{B}\cdot\dd\bs{r}=\mu_0\int_{S}\left(\bs{j}+\epsilon_0\frac{\partial\bs{E}}{\partial{t}}\right)\cdot \dd\bs{S} & (\text{Ampere-Maxwell Law})\\
\end{gather}
$$

By considering tiny cubes and loops, we can get the differential form of the Maxwell's Equations:

$$
\begin{gather}
\nabla\cdot\bs{E}=\frac{\rho}{\epsilon_0} & (\text{Gauss's Law})\\
\nabla\cdot\bs{B}=0 & (\text{No single magnetic pole})\\
\nabla\times\bs{E}=-\frac{\partial\bs{B}}{\partial t} & (\text{Faraday's Law})\\
\nabla\times\bs{B}=\mu_0\bs{j}+\mu_0\epsilon_0\frac{\partial \bs{E}}{\partial t} & (\text{Ampere-Maxwell Law})\\
\end{gather}
$$

## Electromagnetic Wave

When in a free space, where $q$ and $I$ are zero, we found a solution for Maxwell's Equations that satisfies the wave equation:

$$
\begin{gather}
\frac{\partial^2\bs{E}_z}{\partial{t^2}}=\mu_0\epsilon_0\frac{\partial^2\bs{E}_z}{\partial{t^2}}\\
\frac{\partial^2\bs{B}_x}{\partial{t^2}}=\mu_0\epsilon_0\frac{\partial^2\bs{B}_x}{\partial{t^2}}
\end{gather}
$$

We can get the speed of this wave is

$$
c=\frac{1}{\sqrt{\mu_0\epsilon_0}}.
$$

When $\bs{E}=\hat{k}E_0\sin(ky-\omega t)$, $\bs{B}=\hat{\imath} E_0\sin(ky-\omega t)$, we can get the relation between $E_0$ and $B_0$:

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
U_T=\frac{1}{2\pi/\omega}\int_0^{2\pi/\omega}\epsilon_0E_0^2\sin(ky-\omega t)\dd t=\frac{\epsilon_0 E_0^2}{2}.
$$

The intensity of the wave is energy per unit area, also equals to the energy density times velocity,

$$
I=\frac{E_0B_0}{\mu_0}\sin^2(ky-\omega t).
$$

Poynting Vector:

$$
\bs{S}=\frac{\bs{E}\times\bs{B}}{c}.
$$

The Poynting vector has the direction of the electromagnetic wave, and the magnitude of the Poynting vector is the intensity of the wave:

$$
\left\vert\bs{S}\right\vert=I.
$$

## Circuits

Resister($R$) (Ohm's law):

$$
V(t)=RI(t)
$$

Capacitor($C$):

$$
V(t)=\frac{Q(t)}{C}=\frac{1}{C}\int^tI(t^{\prime})\dd t^{\prime}
$$

Inductor($L$):

$$
V(t^{\prime})=L\left.\frac{\dd I}{\dd t}\right\vert_{t=t^{\prime}}
$$

Kirchhoff's Voltage Law (KVL): In any closed loop network, the total EMF is equal to the sum of Potential Difference drops.

$$
\sum V=0
$$

Kirchhoff's Current Law (KCL): Total current entering a junction is equal to total current leaving it.

$$
\sum I=0
$$

In an AC circuit, the _impedance_ ($Z$) of an electric component shows the dynamic relationship between the voltage and current, following complex form of Ohm's law

$$
V_0=\tilde{I}_0Z,
$$

where $V_0$ is the maximum voltage, $Z$ is the impedance, and the real part of $\tilde{I}_0$ is the maximum current.

The current varying with time is

$$
I(t)=\mathrm{Re}\left[\frac{V_0}{\left\vert Z\right\vert}\frac{e^{i\omega t}}{e^{i\phi}}\right]=\frac{V_0}{\left\vert Z\right\vert}\cos\left(\omega t-\phi\right),
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

## Electromagnetism and Relativity

We define _four-nabla_ as follows:

$$
\nabla =\left(\frac{\partial}{\partial x_0},\frac{\partial}{\partial x},\frac{\partial}{\partial y},\frac{\partial}{\partial z}\right),
$$

where $x_0=ct$ is same as that in the four-vector.

The four-nabla operator is a Lorentz covariant operator, which means

$$
\nabla\cdot\nabla=\nabla^\prime\cdot\nabla^\prime.
$$

For a moving charge, we have

$$
\begin{gather}
\rho=\frac{\rho_0}{\sqrt{1-u^2/c^2}}\\
j=\rho\bs{v}=\frac{\rho_0\bs{v}}{\sqrt{1-v^2/c^2}}
\end{gather}
$$

This has the same form as the mass and momentum, so the transformation is same as the $m$ and $p$,

$$
\left[\frac{E}{c^2},\bs{p}\right]\leftrightarrow[\rho,\bs{j}].
$$

We multiply the first term by $c$ to have the same dimension, so we have

$$
P=\left(\frac{E}{c},\bs{p}\right)\leftrightarrow J=(\rho c,\bs{j})\leftrightarrow X=(ct,\bs{x}).
$$

_Four-current_ $J$ can be written as

$$
J=(J_0,J_1,J_2,J_3)=(\rho c,\bs{j}).
$$

By charge conservation, we have

$$
\nabla\cdot j+\frac{\partial \rho}{\partial t}=0.
$$

This remains true under relativity, as it can be written as

$$
\nabla\cdot J=0.
$$

Consider these 2 equations from Maxwell's equations that is independent of $\rho$ and $j$,

$$
\begin{gather}
\nabla\cdot\bs{B}=0\\
\nabla\times\bs{E}+\frac{\partial\bs{B}}{\partial t}=0\\
\end{gather}
$$

We define $\bs{A}$ as following,

$$
\begin{gather}
\bs{B}=\nabla\times\bs{A}\\
\bs{E}=-\nabla V-\frac{\partial\bs{A}}{\partial t}\\
\end{gather}
$$

which is equivalent to the previous equations from Maxwell's equations.

In this definition, a given $\bs{A}$ and $V$ pair can describe a unique electromagnetic field, but for a given electromagnetic field, there are many different groups of $\bs{A}$ and $V$. For $\bs{A}$ and $V$, $\tilde{\bs{A}}$ and $\tilde{V}$ are also valid:

$$
\begin{gather}
\tilde{\bs{A}}=\bs{A}+\nabla\chi\\
\tilde{V}=V-\frac{\partial\chi}{\partial t}
\end{gather}
$$

This is called a _gauge transformation_. To make sure there is only one group of $\bs{A}$ and $V$, we can add a regularization term. When discussing the relativity, we use Lorentz gauge, which is

$$
\frac{\partial A_x}{\partial x}+\frac{\partial A_y}{\partial y}+\frac{\partial A_z}{\partial z}+\frac{1}{c^2}\frac{\partial V}{\partial t}=0.
$$

This is also equivalent to

$$
\nabla\cdot\bs{A}=-\frac{1}{c^2}\frac{\partial V}{\partial t}.
$$

The other two Maxwell's equations are

$$
\begin{gather}
\nabla\cdot\bs{E}=\frac{\rho}{\epsilon_0}\\
\nabla\times\bs{B}=\mu_0\bs{j}+\mu_0\epsilon_0\frac{\partial\bs{E}}{\partial t}
\end{gather}
$$

We plug the definition of $V$ and $\bs{A}$ and Lorentz transformation into these 2 equations. We get

$$
\begin{gather}
\frac{\partial^2V}{\partial x^2}+\frac{\partial^2V}{\partial y^2}+\frac{\partial^2V}{\partial z^2}-\frac{1}{c^2}\frac{\partial^2 V}{\partial t^2}=-\frac{\rho}{\epsilon_0}\\
\frac{\partial^2\bs{A}}{\partial x^2}+\frac{\partial^2\bs{A}}{\partial y^2}+\frac{\partial^2\bs{A}}{\partial z^2}-\frac{1}{c^2}\frac{\partial^2 \bs{A}}{\partial t^2}=-\mu_0\bs{j}
\end{gather}
$$

This is a wave equation, showing the delay required by relativity. $A^\prime(t,\bs{r}^\prime)$ will influence $A(t,\bs{r})$ after $\delta t=\left\vert\bs{r}-\bs{r}^\prime\right\vert/c$.

We combine $V$ and $\bs{A}$ to get four-potential,

$$
A=\left(\frac{V}{c},\bs{A}\right)=(A_0,A_1,A_2,A_3).
$$

We wave equations of $V$ and $\bs{A}$ become one equation:

$$
\frac{\partial^2A}{\partial x^2}+\frac{\partial^2A}{\partial y^2}+\frac{\partial^2A}{\partial z^2}-\frac{\partial^2 A}{\partial(ct)^2}=-\mu_0J,
$$

where $J$ is the four-current. We can rewrite this as

$$
\nabla^2A=\mu_0J.
$$

This shows that $A$ is a four-vector.

We can also rewrite the Lorentz gauge with four-potential as

$$
\nabla\cdot A=0.
$$

These 2 equation are the four-vector form of Maxwell's equations:

$$
\begin{gather}
\nabla^2A=\mu_0J\\
\nabla\cdot A=0.
\end{gather}
$$

Note that we did not change the Maxwell's Equations, but rewrite it in four-vector form.

<details>

<summary>About Tensor</summary>

Say vectors $\bs{V}=(V_x,V_y,V_z)$, $\bs{W}=(W_x,W_y,W_z)$, we can build a Tensor $\bs{T}$:

$$
\begin{gather}
T_xx=V_xW_x\\
T_xy=V_xW_y\\
\cdots\\
T_zz=V_zW_z\\
\end{gather}
$$

The rotation of a tensor is achieved by rotating the vectors. Even if the tensor is not from 2 vectors, the rotation still follows the same rule.

Some linear combinations of tensor's components still hold during rotation. e.g. $S=T_{xx}+T_{yy}+T_{zz}$, which is the dot product of the vectors, will not change, even if the tensor is not from 2 vectors.

</details>

---

$$
\text{Copyright (C) 2025 Yuchen Fu}
$$
