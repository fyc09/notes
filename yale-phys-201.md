# Notes for Open Yale Courses: Fundamentals of Physics II

## Electromagnetism

Coulomb's Law:

$$
\boldsymbol{F}_{21} = -\boldsymbol{F}_{12} = \frac{q_1q_2}{4 \pi \epsilon_0r_{12}^2}\mathbf{e_{12}},
$$

where

$$
\boldsymbol{r_{12}} = |\boldsymbol{r_1}-\boldsymbol{r_2|}.
$$

In an electric dipole, the charges are $q$ and $-q$. We call the dipole moment

$$
\boldsymbol{p} = 2aq\boldsymbol{i}.
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
\boldsymbol{E}_\bot = \frac{\sigma}{\epsilon_0}.
$$

Inside a conductor, the electric field is 0.

Energy stored in an electric field can be calculated by the energy of a capacitor, which is

$$
U_{E} = \frac{\epsilon_0}{2}\boldsymbol{E}^2
$$

When charges are moving in a magnetic field, the charges will experience a Lorentz force:

$$
\boldsymbol{F} = q(\boldsymbol{E} +\boldsymbol{v}\times\boldsymbol{B}).
$$

Because the magnetic force is always perpendicular to the velocity, the force does no work.

The force on a segment of wire in a magnetic field is

$$
\mathrm{d}\boldsymbol{F} = I\mathrm{d}\boldsymbol{l}\times\boldsymbol{B}.
$$

Consider a wire loop with a current $I$ in a magnetic field. The area of the loop is $\boldsymbol{A}$. The torque on the loop is

$$
\boldsymbol{\tau} = \boldsymbol{\mu}\times\boldsymbol{B},
$$

where $\boldsymbol{\mu}$ is the magnetic moment,

$$
\boldsymbol{\mu} = I\boldsymbol{A}.
$$

Biot-Savart Law:

$$
\mathrm{d}\boldsymbol{B} = \frac{\mu_0}{4\pi}\frac{\mathrm{d}\boldsymbol{l}\times\mathbf{e}_{\boldsymbol{r}-\boldsymbol{r'}}}{(\boldsymbol{r}-\boldsymbol{r^{\prime}})^2},
$$

where $\boldsymbol{r}$ is the position of the current, $\boldsymbol{r^{\prime}}$ is the position of magnetic field.

Ampère’s Law:

$$
\oint_{C=\partial S}\boldsymbol{B}\cdot\mathrm{d}\boldsymbol{r}=\mu_0I_{enc}=\mu_0\int_{S}\boldsymbol{j}\cdot \mathrm{d}\boldsymbol{S},
$$

where $I_{enc}$ is the total current *penetrating* surface $S$.

Maxwell's Equations (Static):

$$
\left\{\begin{matrix}
\oint_{S}\boldsymbol{E}\cdot\mathrm{d}\boldsymbol{S}=\frac{1}{\epsilon_0}q_{enc} & (\text{Gauss's Law})\\
\oint_{C}\boldsymbol{B}\cdot\mathrm{d}\boldsymbol{r}=\mu_0I_{enc} & (\text{Ampère's Law})\\
\oint_{C}\boldsymbol{E}\cdot\mathrm{d}\boldsymbol{r} = 0 & (\boldsymbol{E}\text{ is conservative})\\
\oint_{C}\boldsymbol{B}\cdot\mathrm{d}\boldsymbol{S} = 0 & (\text{No single magnetic pole})
\end{matrix}\right.
$$

The Lenz's Law:

$$
\mathscr{E}=-\frac{\mathrm{d}\Phi}{\mathrm{d}t},
$$

where $C$ is a loop made up of a real conductor, $\Phi$ is the magnetic flux through $C$,

$$
\Phi = \int_{S}\boldsymbol{B}\cdot\mathrm{d}\boldsymbol{S},
$$

where $S$ is the surface of the loop $C$.

The EMF $\mathscr{E}$ can be calculated by the following equation:

$$
\mathscr{E}=\oint_{C}(\boldsymbol{E}+\boldsymbol{v}\times\boldsymbol{B})\cdot\mathrm{d}\boldsymbol{l}
$$

Plug the definition of $\Phi$ into Lenz's Law, we get Faraday's Law:

$$
\oint_{C=\partial S}\boldsymbol{E}\cdot\mathrm{d}\boldsymbol{r}=-\int_{S}\frac{\partial\boldsymbol{B}}{\partial t}\cdot\mathrm{d}\boldsymbol{S}.
$$

This equation replaces the 3<sup>rd</sup> equation in the previous version of Maxwell's Equation $\oint_{C}\boldsymbol{E}\cdot\mathrm{d}\boldsymbol{r} = 0$, which shows that a moving magnetic field can excite a *non-conservative* electric field.

The change of flux of magnetic field through a loop can be caused by two reasons: The change of magnetic field, or the movement of loop, shown in the following equation:

$$
-\mathscr{E}=\frac{\mathrm{d}\Phi}{\mathrm{d}t}=\int_{S}\frac{\partial\boldsymbol{B}}{\partial t}\cdot\mathrm{d}\boldsymbol{A}+\oint_{C}(\boldsymbol{v}\times\mathrm{d}\boldsymbol{l})\cdot\boldsymbol{B}.
$$

The energy stored in the magnetic field can be calculated by energy in a inductor, which is

$$
U_{B}=\frac{1}{2\mu_{0}}\boldsymbol{B}^2.
$$

---

## Circuits

Resister($R$) (Ohm's law):

$$
V(t)=RI(t)
$$

Capacitor($C$):

$$
V=\frac{Q}{C}=\frac{1}{C}\int^tI(t^{\prime})\mathrm{d}t^{\prime}
$$

Inductor($L$):

$$
V=L\frac{\mathrm{d}I}{\mathrm{d}t}
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
V_0=\tilde{I_0}Z,
$$

where $V_0$ is the maximum voltage, $Z$ is the impedence, and the real part of $\tilde{I_0}$ is the maximum  current.

The current varying with time is

$$
I(t)=\mathrm{Re}\left[\frac{V_0}{\left\vert Z\right\vert}\frac{e^{i\omega t}}{e^{i\phi}}\right]=\frac{V_0}{\left\vert Z\right\vert}\cos\left(\omega t-\phi\right),
$$

where

$$
\tan\phi=\frac{\mathrm{Im}\left[Z\right]}{\mathrm{Re}\left[Z\right]}
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

$$Z_L=i\omega L.$$
