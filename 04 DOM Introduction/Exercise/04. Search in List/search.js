function search() {
   let userWord = document.getElementById('searchText').value;
   let townsElement = Array.from(document.querySelectorAll('#towns li'));
   let match = document.getElementById('result');
   let count = 0;

   for (const occ of townsElement) {
      if (occ.textContent.includes(userWord)&& 
      userWord !== ``) {
         occ.style.fontWeight = 'bold';
         occ.style.textDecoration = 'underline';
         count++;
      } else {
         occ.style.fontWeight = 'normal';
         occ.style.textDecoration = 'none';
      }
   }
match.textContent=`${count} matches found`
}
