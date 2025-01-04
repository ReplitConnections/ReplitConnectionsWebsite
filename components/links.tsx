export function Github({ username }: { username: string }) {
  return (
    <a href={`https://github.com/${username}`} target="_blank" className="flex gap-2 items-center">
      <img src={`https://github.com/${username}.png?size=40`} alt={`avatar of ${username}`} className="size-4 rounded-full !m-0" /> @{username}
    </a>
  );
}
