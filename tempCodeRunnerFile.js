function translate(s)
{
    let m=" ";
    let n=s.length;
    for(let i=0;i<n;i++)
    {
        if(s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' ||s[i]=='u')
        {
            m+=s[i];
        }
        else if(s[i]!=' ')
        {
           
            m+=s[i]+'o'+s[i];
        }
        else
        {
            m+=s[i];
        }
    }
    console.log(m);
}
translate("this is fun");