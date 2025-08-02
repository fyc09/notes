# Notes for Open Yale Courses: Fundamentals of Physics I

## Relativity

$$
\newcommand{\frac}{\dfrac}
\newcommand{\dd}{\mathrm{d}}
\newcommand{\bs}{\boldsymbol}
$$

Lorentz Transformation:

$$
\begin{gather}
x^\prime=\frac{x-ut}{\sqrt{1-\frac{u^2}{c^2}}}\\
t^\prime=\frac{t-\frac{u}{c^2}}{\sqrt{1-\frac{u^2}{c^2}}}
\end{gather}
$$

When $u/c\ll 1$, the Lorentz transformation will turn into Galilean transformation.

Let $x_0=ct$, we have four-vector

$$
X=(x_0,\bs{r})=(ct,x_1,x_2,x_3).
$$

With $x_0$, we rewrite the Lorentz transformation:

$$
\begin{gather}
x_0^\prime=\frac{x_0-\beta x_1}{\sqrt{1-v^2/c^2}}\\
x_1^\prime=\frac{x_1-\beta x_0}{\sqrt{1-v^2/c^2}}\\
\beta=\frac{u}{c}
\end{gather}
$$

Normally, we have $x_0^2+x_1^2=(x_0^\prime)^2+(x_1^\prime)^2$. Likewise, in this vector, we have 

$$
x_0^2-x_1^2=(x_0^\prime)^2-(x_1^\prime)^2=s^2,
$$

where $s$ is space-time interval.

The ratio of the time interval in a stationary frame to that in a moving frame is given by

$$
\frac{\dd t}{\dd\tau}=\frac{1}{\sqrt{1-v^2/c^2}}.
$$

To get the velocity, we divide the four-vector by the time interval.

$$
V=\frac{\dd X}{\dd \tau}=\left(\frac{c}{\sqrt{1-v^2/c^2}},\frac{\bs{v}}{\sqrt{1-v^2/c^2}}\right)
$$

The square of the velocity is constantly $c^2$:

$$
V^2=V\cdot V=V_0^2-V_1^2=c^2.
$$

The four-momentum is given by the product of the velocity and the mass:

$$
P=mV=\left(\frac{mc}{\sqrt{1-v^2/c^2}},\frac{m\bs{v}}{\sqrt{1-v^2/c^2}}\right)=(p_0, p_1).
$$

We make an expand $p_0$,

$$
p_0=mc+\frac{1}{2c}mv^2+\cdots,
$$

and multiply $p_0$ by $c$,

$$
p_0c=mc^2+\frac{1}{2}mv^2+\cdots.
$$

The second term is the kernetic energy, and the first term is the rest energy of the mass. We can rewrite the momentum as,

$$
P=(p_0,p_1)=(\frac{E}{c},p).
$$

Similar to four-vector, the transformation of the momentum is,

$$
\begin{gather}
p_0^\prime=\frac{p_0-\beta p_1}{\sqrt{1-\beta^2}}\\
p_1^\prime=\frac{p_1-\beta p_0}{\sqrt{1-\beta^2}}\\
\beta=\frac{u}{c}
\end{gather}
$$

Also similar to four-vector, the square of the momentum is $m^2c^2$:

$$
P^2=P\cdot P=p_0^2-p_1^2=m^2c^2.
$$

If we have 2 particles, we have

$$
P_A\cdot P_B=p_{A0}p_{B0}-p_{A1}p_{B1}=\frac{E_A E_B}{c}-p_{A1}p_{B1}
$$

same for all observers.

Photons are massless, so,

$$
K\cdot K=0,
$$

where $K$ is the momentum of the photon. In any frame, the velocity of the photon is always $c$. The energy and momentum of the photon is represented by $\omega$ and $k$. Because the mass is $0$, we have

$$
k=\pm \frac{\omega}{c}.
$$

So, the momentum of a photon can also be written as

$$
K=(k, \pm k).
$$

If the momentum is conserved in one frame, then it is conserved in all frames.

---

$$
\text{Copyright (C) 2025 Yuchen Fu}
$$
