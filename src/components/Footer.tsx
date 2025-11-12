export function Footer() {
  return (
    <footer className="-ml-8 md:-ml-8 lg:-ml-12 mt-20 bg-accent w-screen -mb-12 py-4 flex flex-col items-center justify-center text-center">
      <p>Made by Lucas Ellery</p>
      <p className="flex flex-row items-center justify-center gap-2">
        <a
          target="_blank"
          className="hover:underline"
          href="https://www.linkedin.com/in/lucas-ellery/"
        >
          Reach me on <b className="text-blue-400">LinkedIn</b>
        </a>
      </p>
    </footer>
  );
}
