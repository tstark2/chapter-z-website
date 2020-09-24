<template>
    <footer>
        <div>
            <div class="footerText">
                <p>&copy; 2020 GWRRA Illinois Chapter Z</p>
                <p>Web Development by <a href="https://tstark2.us">Todd Stark II</a></p>
            </div>
            <div class="socialIcons">
                <a href="mailto:cd@il-chapter-z.org"><i class="far fa-envelope"></i></a>
                <a href="https://www.facebook.com/ILChapterZ"><i class="fab fa-facebook"></i></a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "AppFooter"
}
</script>

<style scoped>
footer {
    background-color:var(--purple);
    height:50px;
    width:100vw;
}

footer > div {
    width:75vw;
    height:100%;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:var(--white);
}

.footerText {
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:flex-start;
}

.footerText p {
    margin:0;
}

.footerText p:nth-of-type(2) {
    font-size:0.75em;
}

.footerText p a {
    color:var(--white);
    text-decoration:none;
}

.footerText p a:hover {
    color:var(--yellow);
    text-decoration:underline;
}

footer object {
    pointer-events:none;
    height:2em;
}

footer .socialIcons {
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:80px;
}

footer .socialIcons a {
    color:var(--white);
    font-size:2em;
}

footer .socialIcons a:first-of-type {
    font-size:2.25em;
}

footer .socialIcons a:hover {
    color:var(--yellow);
}

@media (max-device-width: 768px) {
    footer div {
        width:90vw;
    }
}
</style>